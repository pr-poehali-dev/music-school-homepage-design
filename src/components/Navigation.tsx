import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'teachers', label: 'Преподаватели', icon: 'Users' },
    { id: 'about', label: 'О школе', icon: 'BookOpen' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'concerts', label: 'Концерты', icon: 'Music' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  return (
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
  );
};

export default Navigation;