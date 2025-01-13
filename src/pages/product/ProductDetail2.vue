<template>
    <div class="ccontainer">
        <div class="ccontainer7">
            <div class="ccontainer2">
                <SMorePic :images="PPimages"/>
            </div>
            <div class="ccontainer1">
                <SProductDetail :Name="'TENITOL Ikuyo Kita Cafe Style ver.'"
                :tag="'New Arrival'"
                :tagColor="'#00FF2B'"
                :Costs="'$41.99'"
                :Status="'In Stock'"
                :statusColor="'#00FF2B'"
                :id=3
                :Amount=0
                :picLink="'../src/assets/ImageProduct/Amiya1.jpg'"
                />
            </div>
        </div>
        <div class="ccontainer3">
            <div class="ddd">Description</div>
            <div class="ccontainer4">
                <template v-for="item in desc" :key="item">
                    <Description :letters="item.letters"/>
                </template>
            </div>
        </div>
        <div class="ccontainer5">
            <div class="ccontainer6">
                <SPageTitle :title="'Recommended'"
                />
            </div>
            <div class="moritem">
                <Moremore2 />
            </div>
        </div>
        <div class="ccontainer5">
            <div class="ccontainer6">
                <SPageTitle :title="'In Stock'"
                />
            </div>
            <div class="moritem">
                <Moremore2 />
            </div>
        </div>
        <div class="ccontainer5">
            <div class="ccontainer6">
                <SPageTitle :title="'People Also Buy'"
                />
            </div>
            <div class="moritem">
                <Moremore2 />
            </div>
        </div>
    </div>
</template>

<script>
    import SProductPic from '@/components/SProductPage/SProductPic.vue';
    import SProductDetail from '@/components/SProductPage/SProductDetail.vue';
    import SMorePic from '@/components/SProductPage/SMorePic.vue';
    import Description from '@/components/SProductPage/Description.vue';
    import SPageTitle from '@/components/SProductPage/SPageTitle.vue';
    import Moremore2 from '@/components/SProductPage/Moremore2.vue';

    export default {
        components: {
            SProductPic,
            SProductDetail,
            SMorePic,
            Description,
            Moremore2,
            SPageTitle
        },
        data() {
            return {
                PPimages: [ 
                    "/src/assets/ImageProduct/Kita1.jpg",
                    "/src/assets/ImageProduct/Kita2.jpg",
                    "/src/assets/ImageProduct/Kita3.jpg",
                    "/src/assets/ImageProduct/Kita4.jpg",
                    "/src/assets/ImageProduct/Kita5.jpg",
                    // "/src/assets/ImageProduct/Amiya.jpg",
                ],
                desc: [
                    {
                        letters: 'From the anime “BOCCHI THE ROCK!” has been sculpted as a figure wearing an original café clerk-style outfit!'
                    },
                    {
                        letters: 'The cheerful appearance typical of Kita-chan is expressed! The light footsteps and smiling expression are the focus of the design.'
                    },
                    {
                        letters: 'In her hands is cheesecake and berry sauce. She is dressed as a café waitress, with a menu designed to look good on Kita-chan\'s face.'
                    },
                    {
                        letters: 'Transparent parts are used for her hair. The flow of wrinkles in her apron and the flow of her body have also been carefully sculpted.'
                    },
                    {
                        letters: 'Please enjoy the smiling face of Kita-chan as a café waitress!'
                    },
                    {
                        letters: 'Specifications:'
                    },
                    {
                        letters: 'Painted plastic non-scale complete product with stand included. Height: Approximately 200mm (7.87in)'
                    },
                    {
                        letters: 'Manufacturer: FURYU'
                    }
                ],
            };
        },
    }
</script>

<style scoped>
    .ccontainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }

    .ccontainer1{
        width: 1200px;
        display: flex;
        flex-direction: row;
        /* justify-content: space-between;
        align-items: center; */
    }

    .ccontainer2{
        display: flex;
        justify-content: flex-start;
        width: 600px;
        /* margin-top: 25px; */
    }

    .ccontainer3{
        margin-top: 25px;
        width: 1200px;
    }

    .ddd{
        width: 120px;
        font-size: 18px;
        background-color: black;
        color: white;
        padding-top: 2px;
        padding-bottom: 2px;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .ccontainer4{
        border: 1px solid black;
    }

    .ccontainer5{
        width: 1200px;
    }

    .moritem{
        display: flex;
        flex-direction: row;
    }

    .ccontainer6{
        margin-bottom:30px;
    }

    .ccontainer7{
        display: flex;
        flex-direction: row;
        width: 1200px;
        height: 740px;
        gap: 100px;
    }

</style>