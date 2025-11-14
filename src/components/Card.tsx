import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

interface Props {
    models: string;
    products: {
        id: string;
        color: string;
        pictures: string[];
        sizes: string[];
    }[];
    title: string;
    price: number;
    id: number;
}

export const Card = ({ products, title, price, id }: Props) => {
    const [position, setPosition] = useState(0);
    const [selecProduct, setSelecProduct] = useState(products[0]);
    const [, setColorSelected] = useState("");
    const colors = products.map((item) => item.color);

    const handleBack = () => {
        if (position > 0) {
            setPosition(position - 1);
        } else {
            setPosition(selecProduct.pictures.length - 1);
        }
    };

    const handleNext = () => {
        if (position + 1 < selecProduct.pictures.length) {
            setPosition(position + 1);
        } else {
            setPosition(0);
        }
    };

    const handleColor = (color: string) => {
        setSelecProduct(
            products.find((item) => item.color === color) || products[0]
        );
        setColorSelected(color);
        setPosition(0);
    };

    const getColor = (color: string) => {
        switch (color) {
            case "azul":
                return "bg-[#3c94c0]";
            case "rosa":
                return "bg-[#ee7c66]";
            case "marron":
                return "bg-[#a57351]";
            case "beige":
                return "bg-[#d2cec4]";
            case "negro":
                return "bg-[#1d1a1b]";
            case "gris":
                return "bg-[#ccc]";
            default:
                break;
        }
    };

    useEffect(() => {
        setSelecProduct(products[0]);
        setPosition(0);
    }, [products]);

    return (
        <div className="containerm-4">
            <div className="max-w-sm overflow-hidden border  border-[#ccc] hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative h-80  bg-[#ccc]  overflow-hidden group">
                    <Link to={`detail/${id}`}>
                        <img
                        src={selecProduct.pictures[position]}
                        alt={title}
                        className="w-full cursor-pointer scale-115 h-full object-cover hover:scale-125 transition-transform duration-300"
                    />

                    </Link>
                    <button
                        onClick={handleBack}
                        className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>

                    {selecProduct.pictures.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {selecProduct.pictures.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setPosition(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === position
                                            ? "bg-white scale-125"
                                            : "bg-white/60 hover:bg-white/80"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-4 ">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {title}
                        </h3>
                    </div>
                    <div className="flex items-center justify-between w-full">
                         <div className="flex items-center">
                            <p className="italic px-2 py-1 rounded text-md text-gray-900 font-medium transition-colors duration-300">
                                ${price}
                            </p>
                        </div>
                        <div className="flex space-x-2 ">
                            <div className="flex space-x-2">
                                {colors.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleColor(color)}
                                        className={`w-5 cursor-pointer hover:scale-110 h-5 text-sm font-medium transition-all duration-300 ${getColor(
                                            color
                                        )}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};
