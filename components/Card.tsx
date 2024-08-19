import React from 'react';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction
} from './ui/alert-dialog';
import { Character } from '@/app/service';

const Card: React.FC<Character> = ({ name, image, ki, description, gender,affiliation,race,maxKi}) => {
  return (
    <div className="w-56 mx-4 bg-orange-600 rounded-lg shadow-lg overflow-hidden hover:overflow-visible flex flex-col">
        <div className="group relative w-full h-80 overflow-hidden hover:overflow-visible ">
            <Image
            src={image}
            fill
            alt={name}
            className="object-contain object-center hover:overflow-visible w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            sizes="(max-width: 600px) 100vw, 50vw"
            priority
            />
        </div>
        <div className="p-4">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <p className="mt-2 text-gray-200">KI: {ki}</p>
            <AlertDialog>
                <AlertDialogTrigger className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                    Ver más
                </AlertDialogTrigger>
                <AlertDialogContent className='p-4'>
                    <AlertDialogTitle className="flex items-center space-x-4">
                    <div className="w-24 h-24 relative">
                        <Image
                        src={image}
                        fill
                        alt={name}
                        sizes="(max-width: 100px) 100vw, (max-width: 100px) 50vw, 33vw" 
                        className="object-contain object-center rounded-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text-sm text-gray-500">Género: {gender}</p>
                        <p className="text-sm text-gray-500">Afiliation : {affiliation}</p>
                        <p className="text-sm text-gray-500">Raza: {race}</p>
                        <p className="text-sm text-gray-500">KI: {ki}</p>
                        <p className="text-sm text-gray-500">MaxKI: {maxKi}</p>
                    </div>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="mt-4">
                    {description}
                    </AlertDialogDescription>
                    <div className="flex justify-end mt-4">
                    <AlertDialogAction className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
                        Cerrar
                    </AlertDialogAction>
                    </div>
                </AlertDialogContent>
                </AlertDialog>
        </div>
    </div>

  );
};

export default Card;
