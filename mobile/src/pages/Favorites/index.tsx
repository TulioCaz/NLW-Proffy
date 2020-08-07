import React, { useState, useEffect } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';
import ITeacher from '../../components/TeacherItem/ITeacher';

const Favorites: React.FC = () => {
  const [favorites, setFavorite] = useState<ITeacher[]>([]);

  const loadFavorites: () => void = () => {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);

        setFavorite(favoritedTeachers);
      }
    });
  };

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          padding: 16,
        }}
      >
        {favorites.map(favorite => {
          return <TeacherItem key={favorite.id} teacher={favorite} favorited />;
        })}
      </ScrollView>
    </View>
  );
};

export default Favorites;
