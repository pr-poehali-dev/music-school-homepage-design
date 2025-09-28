import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const ContactsSection: React.FC = () => {
  return (
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
};

export default ContactsSection;