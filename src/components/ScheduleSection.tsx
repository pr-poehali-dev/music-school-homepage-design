import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ScheduleSection: React.FC = () => {
  const scheduleData = [
    { time: '09:00-09:45', monday: 'Фортепиано', tuesday: 'Скрипка', wednesday: 'Флейта' },
    { time: '10:00-10:45', monday: 'Вокал', tuesday: 'Фортепиано', wednesday: 'Скрипка' },
    { time: '11:00-11:45', monday: 'Флейта', tuesday: 'Вокал', wednesday: 'Фортепиано' },
    { time: '15:00-15:45', monday: 'Скрипка', tuesday: 'Флейта', wednesday: 'Вокал' },
    { time: '16:00-16:45', monday: 'Фортепиано', tuesday: 'Скрипка', wednesday: 'Флейта' }
  ];

  return (
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
};

export default ScheduleSection;