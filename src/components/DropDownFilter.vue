<template>

    <div class="dropdown-filters">
        <div class="dropdown-text">
            {{ dropDownTitle }}
        </div>
        <div class="filter-box">
            <div>
                <FilterCheckBox
                    filter-type="access_type"
                    filter-value="free"
                    label="Free Resources"
                />
            </div>

            <div>
                <FilterCheckBox
                    filter-type="access_type"
                    filter-value="paid"
                    label="Paid Resources"
                />
            </div>

            <div>
                <FilterCheckBox
                    filter-type="access_type"
                    filter-value="freemium"
                    label="Freemium Resources"
                />
            </div>
        </div>
        <div class="divider-line"></div>
        <div class="dropdown-text" >
            Relevance
        </div>
        <div class="filter-box">
            <div>
                <FilterCheckBox
                    filter-type="type_of_resource"
                    filter-value="tutorials"
                    label="Tutorials"
                />
            </div>
            <div>
                <FilterCheckBox
                    filter-type="type_of_resource"
                    filter-value="documentation"
                    label="Documentation"
                />
            </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="coding-challenges"
                label="Coding Challenges"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="projects"
                label="Projects"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="articles"
                label="Articles"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="newsletter"
                label="Newsletter"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="courses"
                label="Courses"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="interactive-tutorials"
                label="Interactive Tutorials"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="interactive-game"
                label="Interactive Games"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="interactive-coding-environment"
                label="Interactive Coding Environment"
            />
          </div>
          <div>
            <FilterCheckBox
                filter-type="type_of_resource"
                filter-value="tools"
                label="Tools"
            />
          </div>
            <div>
                <FilterCheckBox
                    filter-type="type_of_resource"
                    filter-value="unset"
                    label="No Relevance"
                />
            </div>
        </div>
    </div>

</template>

<script setup>

import FilterCheckBox from '@/components/FilterCheckBox.vue'

const props = defineProps({
    title: {
        type: String,
        default:''
    },
    dropDownTitle: {
        type: String,
        default:'Access Type'
    },

})
</script>

<style scoped>

.dropdown-filters{
    margin-top: 40px;
    background-color: white;
    width: 152px;
    height: auto;
    border: 1px solid #2EB3AE;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 8px;
}

.filter-box{
    width: 70%;
}
.dropdown-text{
    color: black;
    font-size: 9px;
    width: 80%;
}
.divider-line{
    background-color: #2EB3AE;
    width: 80%;
    height: 2px;
    margin-bottom: 10px;
}

</style>