import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'Dried Florals',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/driedflorals',
  },
  {
    id: 2,
    title: 'Herbs and Tea',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/herbsandtea',
  },
  {
    id: 3,
    title: 'Home Decor',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/homedecor',
  },
  {
    id: 4,
    title: 'Home Girl',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/homegirl',
  },
  {
    id: 5,
    title: 'Misc',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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
