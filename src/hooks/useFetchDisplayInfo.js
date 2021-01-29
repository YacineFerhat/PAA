import calendar from "assets/icones/calendar.svg";
import plant from "assets/icones/plant.svg";
import student from "assets/icones/daughter.svg";
import trash from "assets/icones/trash.svg";
import volunteer from "assets/icones/volunteer.svg";
import { useFetchGlobalInfo } from "hooks/useFetchGlobalInfo";

export const useFetchDisplayInfo = () => {
  const numbers = useFetchGlobalInfo();
  let numbersToDisplay = numbers ? numbers[0] : [];
  const Data = [
    {
      id: 1,
      title: "Partcipants et volontaires",
      icon: volunteer,
      number: numbersToDisplay?.participants,
    },
    {
      id: 2,
      title: "L de déchets ramassés",
      icon: trash,
      number: numbersToDisplay?.trashCollected,
    },
    {
      id: 3,
      title: "Evenements organisés",
      icon: calendar,
      number: numbersToDisplay?.eventsDone,
    },
    {
      id: 4,
      title: "Arbres plantés",
      icon: plant,
      number: numbersToDisplay?.treesPlanted,
    },
    {
      id: 5,
      title: "Enfants sensibilisés",
      icon: student,
      number: numbersToDisplay?.childs,
    },
  ];
  return Data;
};
