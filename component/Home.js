import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = () => {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          style.CategoryitemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            // marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={style.categoryitemImage} />
        <Text style={style.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            style.categoryselectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={style.CategorySelectionIcon}
            color={item.selected ? colors.balck : colors.white}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={style.container}>
        <ScrollView contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator= {false}>

       
      {/* Header */}
      <SafeAreaView>
        <View style={style.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={style.profileImage}
          />
          <Feather name="menu" size={24} colors={colors.textDark} />
        </View>
      </SafeAreaView>
      {/* title */}
      <View style={style.titlesWrapper}>
        <Text style={style.titleSubtitle}> Food</Text>
        <Text style={style.titleTitle}>Delivery</Text>
      </View>
      {/* search bar */}
      <View style={style.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={style.Search}>
          <Text style={style.SearchText}>Search</Text>
        </View>
      </View>
      {/* Categories */}
      <View style={style.categoriesWrapper}>
        <Text style={style.categoriesTitle}>Categories</Text>
        <View style={style.categoriesFlatList}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
      {/* popular */}

      <View style={style.popularWrapper}>
        <Text style={style.popularTitle}>Popular</Text>
        {popularData.map(item => (
          <View
            style={[
              style.popularCardWrapper,
              {
                marginTop: item.id == 1 ? 10 : 20,
              },
            ]}>
            <View>
              <View>
                <View style={style.popularTopWrapper}>
                  <MaterialCommunityIcons
                    name="Crown"
                    size={12}
                    color={colors.primary}
                  />
                  <Text style={style.popularTopText}>top of the week</Text>
                </View>
                <View style={style.popularTitleWrapper}>
                  <Text style={style.popularTitleTitle}>{item.title}</Text>
                  <Text style={style.popularWeight}>
                    weight
                    {item.weight}
                  </Text>
                </View>
              </View>
              <View style={style.popularCardBottom}>
                <View style={style.addpizzaButton}>
                  <Feather name="plus" size={10} color={colors.textDark} />
                </View>
                <View style ={style.ratingWrapper}>
                    <MaterialCommunityIcons name="Star" size={10} color= {colors.textDark}/>
                    <Text style={style.rating}>
                        {item.rating}
                    </Text>
                </View>
              </View>
            </View>
            <View style={style.popularCardRiht}>
                <Image source={item.image} style={style.popularCardImage}/>
            </View>
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  titleSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.textDark,
  },
  titleTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  Search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  SearchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesFlatList: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  CategoryitemWrapper: {
    backgroundColor: colors.primary,
    marginLeft: 20,
    borderRadius: 20,
    shadowColor:colors.balck,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2
  },
  categoryitemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  categoryselectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  CategorySelectionIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },

  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },

  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'row',
    overflow:'hidden',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    shadowColor:colors.balck,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2
  },

  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitleTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
    ,marginLeft:-20
  },
addpizzaButton:{
backgroundColor:colors.primary,
padding:40,
paddingHorizontal:40,
paddingVertical:20,
borderTopRightRadius:25,
borderBottomLeftRadius:25

},
ratingWrapper:{
flexDirection:'row',
alignItems:'center',
marginLeft:20
},
rating:{
fontFamily:"Montserrat-SemiBold",
fontSize:12,
color:colors.textDark,
marginLeft:5
},
popularCardRiht:{
marginLeft:40
},
popularCardImage:{
    width:210,
    height:125,
    resizeMode:'contain'
},

});
