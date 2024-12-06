<template>
  <div class="all-container ">
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
            :Name="item.Name"
            :Price="item.Price"
            :tag1="item.tag1"
            :tag1Color="item.tag1Color"
            :tag2="item.tag2"
            :tag2Color="item.tag2Color"
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
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
        Name: 'POP UP PARADE Joker Figure',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
         Name: 'JokerJokerJokerJokerJokerJokerJokerJoker',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
        Name: 'JokerJokerJokerJokerJokerJokerJokerJoker',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
        Name: 'JokerJokerJokerJokerJokerJokerJokerJoker',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
        Name: 'JokerJokerJokerJokerJokerJokerJokerJoker',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
         Name: 'JokerJokerJokerJokerJokerJokerJokerJoker',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
       tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
        Name: 'JokerJokerJokerJokerJokerJokerJokerJoker',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        },
        {
        ImageSource: './src/assets/ImageProduct/Joker6.jpg',
        Name: 'JokerJokerJokerJokerJokerJokerJokerJoker',
        Price: '$30.99',
        tag1: 'In Stock',
        tag1Color: '#009000',
        tag2: 'Persona Series',
        tag2Color: '#7B7B7B'
        }
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
  align-items: center;
  margin-top: 150px ;
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
