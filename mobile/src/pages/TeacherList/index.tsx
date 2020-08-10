/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import api from '../../service/api';

import ITeacher from '../../components/TeacherItem/ITeacher';

import styles from './styles';


const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [favorites, setFavorites] = useState<number[]>([]);

  const [teachers, setTeachers] = useState<ITeacher[]>([])

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  const loadFavorites: () => void = () =>  {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: { id: number }) => {
          return teacher.id;
        })

        setFavorites(favoritedTeachersIds)
      }
    });
  }

  const handleFilterSubmit: () => Promise<void> = async () => {
    loadFavorites();
    try {
      const response = await api.get('classes', {
        params: {subject, week_day, time}
      });

      setIsFiltersVisible(false);
      setTeachers(response.data);

    } catch (error) {
      alert('Erro na busca.');
    }
  };

  const handlerToggleFiltersVisible: () => void = () => {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={(
          <BorderlessButton onPress={handlerToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              onChangeText={text => setSubject(text)}
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  onChangeText={text => setWeek_day(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  onChangeText={text => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual a horário?"
                />
              </View>
            </View>

            <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          padding: 16,
        }}
      >
        {teachers.map(teacher => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}

      </ScrollView>
    </View>
  );
};

export default TeacherList;
