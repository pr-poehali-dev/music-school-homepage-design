import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const TeachersSection: React.FC = () => {
  const teachers = [
    {
      name: 'Елена Петровна Морозова',
      instrument: 'Фортепиано',
      experience: '15 лет',
      education: 'Московская консерватория',
      image: '/img/74f5d47e-6194-4f2e-adf3-25c8aacf0589.jpg',
      achievements: ['Лауреат международных конкурсов', 'Заслуженный работник культуры']
    },
    {
      name: 'Дмитрий Александрович Волков',
      instrument: 'Скрипка',
      experience: '12 лет',
      education: 'Санкт-Петербургская консерватория',
      image: '/img/db6e2197-93bb-43a8-9738-3d7db5d6e2bc.jpg',
      achievements: ['Солист симфонического оркестра', 'Дипломант всероссийских конкурсов']
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">Наши преподаватели</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Профессиональные музыканты с многолетним опытом педагогической деятельности
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="font-montserrat text-xl">{teacher.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{teacher.instrument}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="GraduationCap" size={16} className="mr-2" />
                      {teacher.education}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Clock" size={16} className="mr-2" />
                      Опыт: {teacher.experience}
                    </div>
                    <div className="space-y-1">
                      {teacher.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="text-xs mr-1 mb-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersSection;