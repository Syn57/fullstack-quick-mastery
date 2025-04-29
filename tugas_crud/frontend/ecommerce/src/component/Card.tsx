import React from "react";

const EditIcon = () => (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 019 17.414V13z" />
    </svg>
  );
  
  const DeleteIcon = () => (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  );
  
  const ProductCard = ({
    product = {
      name: "Phone Holder4",
      price: 20000,
      category: "Accesories",
      stock: 20,
      image: "https://pplx-res.cloudinary.com/image/private/user_uploads/obqUXTNRLAayBhu/image.jpg",
      rating: 4.7,
      sold: 250,
      shop: "STAR JAYA_ELECTRONIC",
      cod: true,
    },
    onEdit = () => alert("Edit clicked"),
    onDelete = () => alert("Delete clicked"),
  }) => (
    <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full"
        />
      </div>
      {/* Info */}
      <div className="p-3 flex-1 flex flex-col">
        <div className="font-medium text-gray-800 text-sm truncate">{product.name}</div>
        <div className="text-lg font-bold text-gray-900 mt-1">
          Rp{product.price.toLocaleString()}
        </div>
        {/* Category & Stock */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Kategori: {product.category}</span>
          <span>Stok: {product.stock}</span>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2 mt-4 justify-end">
          <button
            onClick={onEdit}
            className="p-2 rounded hover:bg-blue-50 transition"
            title="Edit"
          >
            <EditIcon />
          </button>
          <button
            onClick={onDelete}
            className="p-2 rounded hover:bg-red-50 transition"
            title="Delete"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
  
  export default ProductCard;
