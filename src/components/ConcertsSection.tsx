import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ConcertsSectionProps {
  setActiveSection: (section: string) => void;
}

const ConcertsSection: React.FC<ConcertsSectionProps> = ({ setActiveSection }) => {
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

  return (
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
};

export default ConcertsSection;