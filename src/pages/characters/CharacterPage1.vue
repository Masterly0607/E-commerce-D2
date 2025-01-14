<template>

  <div class="all-container f-container-1200">
    <div class="container1">
      <SPageTitle :title="'Skullpanda'"
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
        Rout: 'ProductDetail',
        ImageSource: '/src/assets/ImageCharacter/2.jpg',
        Name: 'MEGA a SKULLPANDA 1000% JEAN-MICHEL BASQUIAT',
        Price: '22.00',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Hatsune Miku',
        tag2Color: '#7B7B7B'
        },
        {
        Rout: 'ProductDetail',
        ImageSource: '/src/assets/ImageCharacter/4.jpg',
        Name: 'SKULLPANDA Tell Me What You Want Series Blind Box',
        Price: '1,875.90',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
      {
        ImageSource: '/src/assets/ImageCharacter/14.webp',
         Name: 'MEGA α SKULLPANDA 1000% Egon Schiele',
        Price: '1,800.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'League of legend',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/1.webp',
        Name: 'SKULLPANDA x Mika Ninagawa Blossoms Action Figure',
        Price: '289.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/5.jpg',
        Name: 'SKULLPANDA The Unknown 1/6 Action Figure Doll',
        Price: '266.00',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Arknights',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/16.webp',
        Name: 'SKULLPANDA action! cut! Series Blind Box',
        Price: '22.00',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Sanrio',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/19.webp',
        Name: 'SKULLPANDA OOTD Light Chaser 200% Figurine',
        Price: '236.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Spice and Wolf',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/17.webp',
        Name: 'SKULLPANDA OOTD Glaring 200% Figurine',
        Price: '236.00',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Bocchi the Rock!',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/6.jpg',
        Name: 'SKULLPANDA The Stocking Surprise 100% Figurine',
        Price: '56.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Arknights',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/10.webp',
        Name: 'SKULLPANDA The Glimpse 100% Figurine',
        Price: '56.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Limited Stock',
        tag2Color: '#FF0000',
        tag3: 'Fate Series',
        tag3Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/18.jpg',
         Name: 'SKULLPANDA Bunny or Doggy 100% Figurine',
        Price: '56.00',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Evangelion Series',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/8.jpg',
        Name: 'SKULLPANDA Winter Symphony Series Plush',
        Price: '37.99',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Dr Stone',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/3.jpg',
        Name: 'MEGA COLLECTION 1000% a SKULLPANDA Thaw',
        Price: '1,875.90',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Hatsune Miku',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/9.jpg',
        Name: 'SKULLPANDA The Sound Series Blind Box',
        Price: '15.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Arknights',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/7.jpg',
        Name: 'SKULLPANDA The Ink Plum Blossom Series Blind Box',
        Price: '22.00',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Limited Stock',
        tag2Color: '#FF0000',
        tag3: 'Dangaronpa',
        tag3Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/11.webp',
        Name: 'SKULLPANDA Image of Reality Series Blind Box',
        Price: '22.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/12.jpg',
        Name: 'SKULLPANDA Everyday Wonderland Series',
        Price: '21.99',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Frieren: Beyond...',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/13.webp',
        Name: 'SKULLPANDA Laid Back Tomorrow Series Blind Box',
        Price: '30.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Arknights',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/15.webp',
        Name: 'SKULLPANDA The Mare of Animals Series Blind Box',
        Price: '22.00',
        tag1: 'Pre Order',
        tag1Color: '#009000',
        tag2: 'Makeine',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: '/src/assets/ImageCharacter/20.jpg',
        Name: 'SKULLPANDA OOTD The Wild Green 200% Figurine',
        Price: '236.00',
        tag1: 'In Stock',
        tag1Color: '#FF6200',
        tag2: 'Fate Series',
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
  

   