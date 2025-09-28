import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'teachers', label: 'Преподаватели', icon: 'Users' },
    { id: 'about', label: 'О школе', icon: 'BookOpen' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'concerts', label: 'Концерты', icon: 'Music' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

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

  const courses = [
    { name: 'Фортепиано', age: '5-18 лет', duration: '45 мин', price: '3000 ₽/мес' },
    { name: 'Скрипка', age: '6-16 лет', duration: '45 мин', price: '3500 ₽/мес' },
    { name: 'Флейта', age: '7-15 лет', duration: '30 мин', price: '2800 ₽/мес' },
    { name: 'Вокал', age: '5-18 лет', duration: '45 мин', price: '3200 ₽/мес' }
  ];

  const scheduleData = [
    { time: '09:00-09:45', monday: 'Фортепиано', tuesday: 'Скрипка', wednesday: 'Флейта' },
    { time: '10:00-10:45', monday: 'Вокал', tuesday: 'Фортепиано', wednesday: 'Скрипка' },
    { time: '11:00-11:45', monday: 'Флейта', tuesday: 'Вокал', wednesday: 'Фортепиано' },
    { time: '15:00-15:45', monday: 'Скрипка', tuesday: 'Флейта', wednesday: 'Вокал' },
    { time: '16:00-16:45', monday: 'Фортепиано', tuesday: 'Скрипка', wednesday: 'Флейта' }
  ];

  const concerts = [
    {
      title: 'Осенний концерт учащихся',
      date: '15 октября 2024',
      time: '18:00',
      venue: 'Большой зал',
      description: 'Выступления учеников всех классов'
    },
    {
      title: 'Концерт памяти Римского-Корсакова',
      date: '18 марта 2025',
      time: '19:00',
      venue: 'Концертный зал филармонии',
      description: 'Торжественный концерт к дню рождения композитора'
    }
  ];

  const renderHome = () => (
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

  const renderTeachers = () => (
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

  const renderAbout = () => (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-8 text-center">О школе</h1>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center">
                  <Icon name="History" size={20} className="mr-3 text-primary" />
                  История школы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Музыкальная школа имени Н.А. Римского-Корсакова была основана в 1957 году как детская музыкальная школа. 
                  За более чем 65 лет существования школа выпустила тысячи талантливых музыкантов, многие из которых 
                  стали профессиональными исполнителями, композиторами и педагогами.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center">
                  <Icon name="Target" size={20} className="mr-3 text-primary" />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Мы стремимся дать каждому ребенку возможность раскрыть свой творческий потенциал через музыку, 
                  воспитать любовь к классическому искусству и подготовить новое поколение музыкантов, 
                  способных продолжить и развить традиции русской музыкальной культуры.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center">
                  <Icon name="Award" size={20} className="mr-3 text-primary" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Награды школы:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Лауреат областных конкурсов</li>
                      <li>• Диплом Министерства культуры</li>
                      <li>• Благодарность Департамента образования</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Статистика:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Более 500 выпускников</li>
                      <li>• 85% поступают в музыкальные вузы</li>
                      <li>• 12 заслуженных педагогов</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">Расписание занятий</h1>
          <p className="text-lg text-gray-600">Индивидуальные занятия по инструментам</p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-montserrat text-center">Недельное расписание</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-montserrat text-gray-800">Время</th>
                    <th className="text-left p-3 font-montserrat text-gray-800">Понедельник</th>
                    <th className="text-left p-3 font-montserrat text-gray-800">Вторник</th>
                    <th className="text-left p-3 font-montserrat text-gray-800">Среда</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((slot, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-primary">{slot.time}</td>
                      <td className="p-3 text-gray-600">{slot.monday}</td>
                      <td className="p-3 text-gray-600">{slot.tuesday}</td>
                      <td className="p-3 text-gray-600">{slot.wednesday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <Icon name="Info" size={16} className="inline mr-2" />
                Расписание может изменяться. Актуальное расписание уточняйте у администратора.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderConcerts = () => (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">Концерты и мероприятия</h1>
          <p className="text-lg text-gray-600">Выступления наших учеников и преподавателей</p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {concerts.map((concert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="font-montserrat text-xl mb-2">{concert.title}</CardTitle>
                    <CardDescription className="text-gray-600">{concert.description}</CardDescription>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20 mt-2 md:mt-0">
                    {concert.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {concert.time}
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    {concert.venue}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-gray-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-montserrat font-semibold mb-4">Хотите выступить?</h3>
              <p className="text-gray-600 mb-6">
                Мы регулярно проводим концерты для наших учеников. Это отличная возможность 
                показать свои достижения и получить сценический опыт.
              </p>
              <Button 
                onClick={() => setActiveSection('contacts')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Узнать подробности
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">Контакты</h1>
          <p className="text-lg text-gray-600">Свяжитесь с нами для записи на занятия</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat flex items-center">
                <Icon name="Phone" size={20} className="mr-3 text-primary" />
                Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Адрес:</h4>
                <p className="text-gray-600">г. Москва, ул. Музыкальная, д. 15</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Телефон:</h4>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Email:</h4>
                <p className="text-gray-600">info@rimsky-school.ru</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Режим работы:</h4>
                <p className="text-gray-600">Пн-Пт: 9:00-20:00<br />Сб: 9:00-18:00<br />Вс: выходной</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat flex items-center">
                <Icon name="UserPlus" size={20} className="mr-3 text-primary" />
                Запись на обучение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Для записи на обучение свяжитесь с нами по телефону или приходите в школу. 
                  Мы проведем прослушивание и поможем выбрать подходящий инструмент.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Необходимые документы:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Заявление на обучение</li>
                    <li>• Копия свидетельства о рождении</li>
                    <li>• Медицинская справка</li>
                    <li>• 2 фотографии 3×4</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'teachers': return renderTeachers();
      case 'about': return renderAbout();
      case 'schedule': return renderSchedule();
      case 'concerts': return renderConcerts();
      case 'contacts': return renderContacts();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🎵</div>
              <span className="font-montserrat font-bold text-xl text-gray-800">Римский-Корсаков</span>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(item.id)}
                  className="font-medium"
                >
                  <Icon name={item.icon as any} size={16} className="mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
            
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-16">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🎵</div>
                <span className="font-montserrat font-bold text-xl">Римский-Корсаков</span>
              </div>
              <p className="text-gray-400">
                Музыкальная школа с многолетними традициями классического образования
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>г. Москва, ул. Музыкальная, д. 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@rimsky-school.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Музыкальная школа имени Н.А. Римского-Корсакова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;