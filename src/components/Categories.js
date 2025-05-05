// components/Categories.jsx
const Categories = ({ currentCategory, setCurrentCategory }) => {
  const categories = [
    { id: "technology", name: "Технологии", icon: "fa-microchip" },
    { id: "business", name: "Бизнес", icon: "fa-chart-line" },
    { id: "science", name: "Наука", icon: "fa-flask" },
    { id: "sports", name: "Спорт", icon: "fa-running" },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-2">Категории</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCurrentCategory(cat.id)}
            className={`flex items-center px-4 py-2 rounded-full transition ${
              currentCategory === cat.id
                ? "bg-blue-500 bg-opacity-20 border border-blue-500"
                : "border border-gray-600 hover:bg-gray-700"
            }`}
          >
            <i className={`fas ${cat.icon} mr-2 text-sm`} />
            <span className="text-sm">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
