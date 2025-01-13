<template>
    <div class="ccontainer">
        <div class="ccontainer7">
            <div class="ccontainer2">
                <SMorePic :images="PPimages"/>
            </div>
            <div class="ccontainer1">
                <SProductDetail :Name="'Amiya: Newsgirl VER. Figure'"
                :tag="'New Arrival'"
                :tagColor="'#00FF2B'"
                :Costs="'117.99'"
                :Status="'In Stock'"
                :statusColor="'#00FF2B'"
                :id=2
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
                <Moremore3 />
            </div>
        </div>
        <div class="ccontainer5">
            <div class="ccontainer6">
                <SPageTitle :title="'In Stock'"
                />
            </div>
            <div class="moritem">
                <InStock />
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
    import Moremore3 from '@/components/SProductPage/Moremore3.vue';
    import InStock from '@/components/SProductPage/InStock.vue';

    export default {
        components: {
            SProductPic,
            SProductDetail,
            SMorePic,
            Description,
            Moremore2,
            Moremore3,
            InStock,
            SPageTitle
        },
        data() {
            return {
                PPimages: [ 
                    "/src/assets/ImageProduct/Amiya1.jpg",
                    "/src/assets/ImageProduct/Amiya2.jpg",
                    "/src/assets/ImageProduct/Amiya3.jpg",
                    "/src/assets/ImageProduct/Amiya4.jpg",
                    "/src/assets/ImageProduct/Amiya5.jpg",
                    // "/src/assets/ImageProduct/Amiya.jpg",
                ],
                desc: [
                    {
                        letters: '"The sky of Londinium is always gray."'
                    },
                    {
                        letters: 'From the popular smartphone game "Arknights" comes a 1/7 scale figure of Amiya in her popular Newsgirl outfit. With meticulous sculpting and paintwork, the detailed textures of her outfit have been faithfully captured in scale figure form. Amiya\'s oversized shoulder bag and newspapers tucked under her arm further accentuate her adorable looks. Great care has also been taken in creating the texture and colors of the figure’s base, making it appear as though taken straight from the streets of Londinium. Doctor, be sure to add the lovable Newsgirl Amiya to your collection!'
                    },
                    {
                        letters: `Sculptor: Chen Tian (Good Smile Shanghai)`
                    }, 
                    {
                        letters: 'https://special.goodsmile.info/popularparade/en/'
                    },
                    {
                        letters: 'Specifications:'
                    },
                    {
                        letters: 'Painted plastic 1/7 scale complete product with stand included. Approximately 250mm (9.84in) in height.'
                    },
                    {
                        letters: 'Manufacturer: Good Smile Arts Shanghai'
                    },
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