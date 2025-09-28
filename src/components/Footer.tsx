import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;