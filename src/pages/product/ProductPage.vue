<template>

  <div class="all-container f-container-1200">
   <back-button></back-button>
    <div class="container1">
      <SPageTitle :title="'Trending'"
      />
    </div>
    <!-- <div class="container">
      <SFilter :Filters="'Category'"/>
    </div> -->
    <div class="bigcontainer1">
      <div class="container3">
        <template v-for="item in Filter" :key="item">
          <SFilter :Filters="item.Filters"/>
        </template>
      </div>
      <div class="container2">
        <template v-for="item in goods" :key="item">
            <SProduct :ImageSource="item.ImageSource"
            :Rout="item.Rout"
            :Name="item.Name"
            :Price="item.Price"
            :tag1="item.tag1"
            :tag1Color="item.tag1Color"
            :tag2="item.tag2"
            :tag2Color="item.tag2Color"
            :tag3="item.tag3"
            :tag3Color="item.tag3Color"
            />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import SFilter from '@/components/SProductPage/SFilter.vue';
import SPageTitle from '@/components/SProductPage/SPageTitle.vue';
import SProduct from '@/components/SProductPage/SProduct.vue';


export default {
  components: {
    SPageTitle,
    SProduct,
    SFilter
  },
  data(){
    return {
      // items: [
      //   {
      //   borderColor: '#ffc75f'
      //   },
      // ],
      Filter: [
        {
        Filters: 'Categories'
        },
        {
        Filters: 'Manufacturers'
        }
      ],

      goods: [
        {
        ImageSource: './src/assets/ImageProduct/Yuu3.jpg',
        Name: 'Qset + P4G Protagnist Figure',
        Price: '$15.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Miku1.jpg',
        Name: 'Hatsune Miku Figure - Sakura Miku 2024 Ver.',
        Price: '$33.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Hatsune Miku',
       tag2Color: '#7B7B7B'
        },
        {
        Rout: 'ProductDetail',
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
        Name: 'POP UP PARADE Joker Figure',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Miku2.jpg',
        Name: 'Nenderoid Surprise Piapro Characters',
        Price: '$59.94',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Hatsune Miku',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Amiya.jpg',
        Name: 'Amiya: Newsgirl Ver. figure',
        Price: '$117.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Arknights',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Doctor.jpg',
         Name: 'Nendoroid Doctor Figure',
        Price: '$64.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Arknights',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Thorn.jpg',
        Name: 'Nendoroid Thorn Figure',
        Price: '$64.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Arknights',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Senku.jpg',
        Name: 'POP UP PARADE Senku Ishigami Figure',
        Price: '$35.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Dr Stone',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Monokuma.jpg',
        Name: 'SOFT VINYL FIGURE Dangaronpa 12 - Monokuma',
        Price: '$58.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Limited Stock',
        tag2Color: '#FF0000',
        tag3: 'Dangaronpa',
        tag3Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Ereshkigal.jpg',
         Name: 'Lancer/Ereshkigal Figure',
        Price: '$30.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Limited Stock',
        tag2Color: '#FF0000',
        tag3: 'Fate Series',
        tag3Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Haru1.jpg',
        Name: 'POP UP PARADE Noir Figure',
        Price: '$31.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Frieren.jpg',
        Name: 'Frieren: magic of the Eventide Glow Figure',
        Price: '$113.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Frieren: Beyond...',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Kaltsit.jpg',
        Name: 'Nendoroid Kalt\'sit Figure',
        Price: '$69.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Arknights',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Sona.jpg',
         Name: 'Nendoroid Sona Figure',
        Price: '$74.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'League of legend',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Anna.jpg',
        Name: 'POP UP PARADE Anna Yanami L Size Figure',
        Price: '$57.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Makeine',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Scthach.jpg',
        Name: 'POP UP PARADE Lancer/Scthach Figure',
        Price: '$43.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Fate Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Kuromi.jpg',
        Name: 'Nendoroid Kuromi Figure',
        Price: '$54.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Sanrio',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Asuka.jpg',
         Name: 'Asuka Shikinami Langley Figure',
        Price: '$216.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Evangelion Series',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Holo.jpg',
        Name: 'TENITOL Holo FIgure',
        Price: '$56.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Spice and Wolf',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Kita.jpg',
        Name: 'TENITOL Ikyou Kita Style Ver.',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Bocchi the Rock!',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Chainsaw.jpg',
        Name: 'Chainsaw Man Makima 1/7 Scale Figure',
        Price: '$197.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Chainsaw Man',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Kirby.jpg',
        Name: 'POP UP PARADE Kirby Figure',
        Price: '$31.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Kirby Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Asuna.jpg',
         Name: 'POP UP PARADE Asuna Figure',
        Price: '$38.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Sword Art Online',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Sekai.jpg',
        Name: 'POP OP PARADE Kanade Yoisaki Figure',
        Price: '$31.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Hatsune Miku',
        tag2Color: '#7B7B7B'
        },
      ]
    }
  },
  mounted() {
    console.log(this.items)
  }
};
</script>

<style scoped>
.all-container{
  display: flex;
  flex-direction: column;


}
.bigcontainer1{
  display: flex;
  flex-direction: row;
}
.container2{
  width: 1075px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  row-gap: 30px;
}
.container1 {
  display: inline-flex;
  margin-bottom: 30px;
  /* display: flex; */
  /* margin: 0px; */
}
.container3{
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}

</style>
