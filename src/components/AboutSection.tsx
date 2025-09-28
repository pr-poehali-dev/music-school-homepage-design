import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection: React.FC = () => {
  return (
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
};

export default AboutSection;