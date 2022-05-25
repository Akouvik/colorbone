import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'Dried Florals',
    imageUrl: 'https://i.ibb.co/sJV1zrt/pexels-cottonbro-4273435.jpg',
    route: 'shop/driedflorals',
  },
  {
    id: 2,
    title: 'Herbs and Tea',
    imageUrl: 'https://i.ibb.co/swJQcqW/pexels-karolina-grabowska-4203096.jpg',
    route: 'shop/herbsandtea',
  },
  {
    id: 3,
    title: 'Healing Crystals',
    imageUrl: 'https://i.ibb.co/VgHd0B9/pexels-mikhail-nilov-6945074.jpg',
    route: 'shop/homedecor',
  },
  {
    id: 4,
    title: 'Home Girl',
    imageUrl: 'https://i.ibb.co/NndjJd8/pexels-monstera-9587895.jpg',
    route: 'shop/homegirl',
  },
  {
    id: 5,
    title: 'Misc',
    imageUrl: 'https://i.ibb.co/hBTYWb1/pexels-anna-nekrashevich-8533213.jpg',
    route: 'shop/misc',
  },
];
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          category={category}
          categoryProducts={categories}
        />
      ))}
    </div>
  );
};

export default Directory;
