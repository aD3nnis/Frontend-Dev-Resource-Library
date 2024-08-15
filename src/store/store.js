import {reactive, computed} from 'vue'
import axios from 'axios'
import orderBy from 'lodash/orderBy'

export const stripUrl = (url) => {
    return url.replace(/(http:\/\/|https:\/\/|www\.)/g, '').replace('/', '');
};

const prepareSiteData = (sites) => {

    for (const site of sites) {
        const imgEl = document.createElement('img');
        const favEl = document.createElement('img');
        const fullSiteUrl  = document.createElement('a');
        site.fullSiteUrl = site.url;
        site.url = stripUrl(site.url);
        const srcImg = "/../../site-screenshots/" + site.url + ".png";
        site.imageSrc = srcImg;
        const srcFav = "/../../favicons/" + site.url + ".ico";
        site.faviconSrc = srcFav;
        imgEl.src = srcImg;

        imgEl.onerror = function () {
            site.imageSrc = null;
        };

        favEl.src = srcFav;

        favEl.onerror = function () {
            site.faviconSrc = null;
        };

    }
    return orderBy(sites, ['url'], ['asc']);
}



export const store = reactive({
    state: {
        numItems: 10,
        searchBar: '',
        sites: [],
        filterSites: false,
        freeSites: [],
        paidSites: [],
        viewMode: 'List View',
        sorters: {
            url: null,
            difficulty_level: null
        },
        filters: {
            access_type: {
                free: true,
                paid: true,
                freemium: true,
            },
            type_of_resource: {
                tutorials: true,
                interactiveGame: true,
                codingChallenges: true,
                documentation: true,
                projects: true,
                courses: true,
                interactiveTutorials: true,
                interactiveCodingEnvironment: true,
                articles: true,
                newsletter: true,
                tools: true,
                unset: true,
            }
        },
        activeSorter: null,
        endPage: 0,

    },
    radioItems: [
        { label: 'List View', value: 'List View', name: 'listView' },
        { label: 'Card View', value: 'Card View', name: 'cardView'},
        // add more options here
    ],
    mutations: {
        setNumItems(value) {
            store.state.numItems = value
        },


    },

});


// need to be able to have a combination of anything so
export const searchResultsSites = computed(()=>{

         return sortedSites.value.filter(site => site.url.toLowerCase().includes(store.state.searchBar.toLowerCase())); // no mutations
});
export const filteredSites = computed(()=> {

    // if store does not have a length yet, then we return the sites
    // we do this because there is no point to the rest of the code, there is nothing to filter through
    if (!store.state.sites.length) {
        return store.state.sites
    }

    // a return statement that will filter
    // site === store.state.sites[0]
    // so site is one layer into the object that is store.state.sites
    // returns an array of sites where the below criteria is met
    return store.state.sites.filter(site => { // for each site
        for (let filterType in store.state.filters) { // it will loop through the filter options,
            // the current example is that store.state.filters is the object that holds the attributes
            // filterType are the individual attributes that change with each loop


            const attributes = store.state.filters[filterType];// for an object the attribute is the key instead of index being the key
            // so, it is accessing the property from the filters object and switches to the next property each loop
            // why this is not store.state.filters is because the above specifies which specific filter within filter object you want to focus on
            // store.state.filters is giving all the filter objects, not just one to focus on

            // data key is the object filter name that we are referencing

            let currentFilterMatched = false;


            // filterType will initally be 'status' because in store.state.filters, the firs filter object is status, this is how data in an object works
            if (filterType === 'relevance') {
                // this is a given, if filterType is equal to relevance then we
                filterType = 'type_of_resource';// in our json file this is the name of the attribute we want to reference if we are looking at the relevance filter
            }

            // this for loop is inside the previous
            // attribute is the variable that holds the value of the attributes inside the filter objects inside the filet object
            // this is why we need nested loops is because we are going two layers down inside the objects to get the attributes at the lowest level
            for (let attribute in attributes) {

                const filterEnabledForAttribute = attributes[attribute]; // the reason the value of this is a boolean
                // the attribute themselves have boolean values so what the above code is saying is that
                // if the key attribute is in attributes take the value of attribute and give it to filterEnabledForAttribute
                // this above notation means that you're asking JavaScript to give you the value associated with the key that's inside the brackets.

                // use this if statement because in relevance some have an empty string value, not "unset"
                if (attribute === "unset") {
                    attribute = "";
                }

                    // the site had the value of the property and it was checked that the value of the checkbox was true
                if (filterEnabledForAttribute && (site[filterType] === attribute)) {

                    // attribute just flips through all the property options inside attributes
                    // so what it is checking is that if the json file has the value of what the attribute equals
                    // it is checking the filterType value inside the site
                    // an example would be the value of attribute is 'documentation', now we will get the value of the filterType
                    // so filterType itself will have the property value of type_of_resource but the value we are accessing is inside filterType which means we

                    currentFilterMatched = true;
                    // if it is true that the filter attribute has a truthy value and how it would have a truthy value if the value of the property is true based off of
                    break;
                }

            }
            // if 'documentation' and 'tutorials' === (or any other type_of_resource value) false, return true
            // if relevance is false
            // if relevance[attribute] == false

            if (!currentFilterMatched) {
                // if nothing matches then we get a false return
                    return false;
            }
        }
        return true;
    });
});

export const sortedSites = computed(() => {
    const sortProps = [];
    const sortOrders = [];
    const prop = store.state.activeSorter

    if (prop && store.state.sorters[prop] !== null) {
        sortProps.push(prop);
        sortOrders.push(store.state.sorters[prop] ? 'desc' : 'asc');

    }
    // if search has value then use store.state.sites
    // one computed for final results that acts as control for all operations
    // a list that either filters or searches, contains value of what you are ordering
    return orderBy(filteredSites.value, sortProps, sortOrders);
});

export const finalResultsForCurrentPage = computed(() => {
    if (sortedSites.value.length) { // true if empty array
        if (store.state.endPage - store.state.numItems < 0){
            return searchResultsSites.value.slice(0, store.state.endPage + store.state.numItems);

        }else{
            return searchResultsSites.value.slice(store.state.endPage - store.state.numItems, store.state.endPage);
        }
    }
});

// use sites data to parse through to filter sites
export const getSitesFromJson = () => {
    axios.get('../../sites-directory.json')
        .then(response => {
            store.state.sites = prepareSiteData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
};





