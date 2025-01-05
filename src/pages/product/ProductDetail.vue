<template>
    <div class="ccontainer">
        <div class="ccontainer1">
            <SProductPic :Ppic="'../src/assets/ImageProduct/Joker2.jpg'"/>
            <SProductDetail :Name="'POP UP PARADE Joker Figure'"
            :tag="'New Arrival'"
            :tagColor="'#00FF2B'"
            :Costs="'$30.99'"
            :Status="'In Stock'"
            :statusColor="'#00FF2B'"
            />
        </div>
        <div class="ccontainer2">
            <SMorePic :Pppic="'../src/assets/ImageProduct/Joker2_2.jpg'"/>
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
                desc: [
                    {
                        letters: 'POP UP PARADE is a new series of figure that are easy to collect with affordable prices and releases planned just four months after pre-orders begin! Each figure stands around 17-18cm in height and the series features a vast section of characters from popular anime and game series, and many more to be added soon!'
                    },
                    {
                        letters: 'From “PERSONA5 the Animation”, POP UP PARADE Joker, the leader of the Phantom Thieves of Hearts, is coming out soon! Joker will be released in 170mm size in a dynamic pose with a daring smile on his face.'
                    },
                    {
                        letters: `POP UP PARADE Series Special Site `
                    }, 
                    {
                        letters: 'https://special.goodsmile.info/popularparade/en/'
                    },
                    {
                        letters: 'Sculptor: Design COCO'
                    },
                    {
                        letters: 'Specifications:'
                    },
                    {
                        letters: 'Painted ABS&PVC non-scale complete product with stand included. Approximately 170mm (6.69in) in height.'
                    },
                    {
                        letters: 'Manufacturer: Good Smile Company'
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
        justify-content: space-between;
        align-items: center;
    }

    .ccontainer2{
        display: flex;
        justify-content: flex-start;
        width: 1200px;
        margin-top: 25px;
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
</style>