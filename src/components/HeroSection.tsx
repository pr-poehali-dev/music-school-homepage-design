import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {
  const courses = [
    { name: 'Фортепиано', age: '5-18 лет', duration: '45 мин', price: '3000 ₽/мес' },
    { name: 'Скрипка', age: '6-16 лет', duration: '45 мин', price: '3500 ₽/мес' },
    { name: 'Флейта', age: '7-15 лет', duration: '30 мин', price: '2800 ₽/мес' },
    { name: 'Вокал', age: '5-18 лет', duration: '45 мин', price: '3200 ₽/мес' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-gray-900/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
              Основана в 1957 году
            </Badge>
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-gray-800 mb-6 leading-tight">
              МУЗЫКАЛЬНАЯ ШКОЛА
              <br />
              <span className="text-primary">ИМЕНИ РИМСКОГО-КОРСАКОВА</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-open-sans mb-8 leading-relaxed">
              Традиции классического музыкального образования
              <br />
              в современном исполнении
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg"
                onClick={() => setActiveSection('about')}
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 text-lg"
                onClick={() => setActiveSection('contacts')}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться
              </Button>
            </div>
          </div>
        </div>
        
        {/* Musical Elements */}
        <div className="absolute top-20 left-10 text-6xl text-primary/20 animate-bounce">♪</div>
        <div className="absolute bottom-20 right-10 text-8xl text-secondary/20 animate-pulse">♫</div>
        <div className="absolute top-1/3 right-20 text-4xl text-primary/30">🎹</div>
        <div className="absolute bottom-1/3 left-20 text-5xl text-secondary/30">🎻</div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">Наши курсы</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Индивидуальные и групповые занятия для детей и взрослых
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">
                    {course.name === 'Фортепиано' && '🎹'}
                    {course.name === 'Скрипка' && '🎻'}
                    {course.name === 'Флейта' && '🎵'}
                    {course.name === 'Вокал' && '🎤'}
                  </div>
                  <CardTitle className="font-montserrat">{course.name}</CardTitle>
                  <CardDescription>{course.age}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Продолжительность: {course.duration}</p>
                  <p className="text-lg font-semibold text-primary">{course.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-gray-800 mb-6">О нашей школе</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Музыкальная школа имени Н.А. Римского-Корсакова — одно из старейших учебных заведений города, 
                которое на протяжении более 65 лет готовит талантливых музыкантов.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Наши выпускники успешно поступают в ведущие консерватории страны и становятся 
                профессиональными музыкантами, педагогами и деятелями культуры.
              </p>
              <Button 
                onClick={() => setActiveSection('about')}
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Подробнее о школе
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/d783d8c6-d45c-49bf-8b7f-67606995974c.jpg" 
                alt="Концертный зал"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;