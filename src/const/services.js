import React from "react";
import BankruptcyOfIndividuals from "../pages/services/BankruptcyOfIndividuals";
import CriminalCases from "../pages/services/CriminalCases.js";
import AdministrativeMatters from "../pages/services/AdministrativeMatters";
import LaborAffairs from "../pages/services/LaborAffairs";
import FamilyMatters from "../pages/services/FamilyMatters";
import HereditaryAffairs from "../pages/services/HereditaryAffairs";
import ParoleLawyer from "../pages/services/ParoleLawyer";
import EnforcementProceedings from "../pages/services/EnforcementProceedings";
import AccidentLawyer from "../pages/services/AccidentLawyer";
import ConsumerProtection from "../pages/services/ConsumerProtection";
import HousingIssues from "../pages/services/HousingIssues";
import EstateLawyer from "../pages/services/EstateLawyer";
import CreditAffairs from "../pages/services/CreditAffairs";
import DisputesInArbitration from "../pages/services/DisputesInArbitration";
import ProtectionOfHonorAndDignity from "../pages/services/ProtectionOfHonorAndDignity";
import LandAffairs from "../pages/services/LandAffairs";

export const services = [
  {
    id: 'bankruptcy-of-individuals',
    value: 'Банкротство физических лиц',
    nameelement: <BankruptcyOfIndividuals />
  },
  {
    id: 'criminal-cases',
    value: 'Уголовные дела',
    nameelement: <CriminalCases />
  },
  {
    id: 'administrative-matters',
    value: 'Административные дела',
    nameelement: <AdministrativeMatters />
  },
  {
    id: 'labor-affairs',
    value: 'Трудовые дела',
    nameelement: <LaborAffairs />
  },
  {
    id: 'family-matters',
    value: 'Семейные дела',
    nameelement: <FamilyMatters />
  },
  {
    id: 'hereditary-affairs',
    value: 'Наследственные дела',
    nameelement: <HereditaryAffairs />
  },
  {
    id: 'parole-lawyer',
    value: 'Условно-досрочное освобождение',
    nameelement: <ParoleLawyer />
  },
  {
    id: 'enforcement-proceedings',
    value: 'Исполнительное производство',
    nameelement: <EnforcementProceedings />
  },
  {
    id: 'accident-lawyer',
    value: 'Дорожно-транспортные происшествия',
    nameelement: <AccidentLawyer />
  },
  {
    id: 'consumer-protection',
    value: 'Защита прав потребителей',
    nameelement: <ConsumerProtection />
  },
  {
    id: 'housing-issues',
    value: 'Жилищные вопросы',
    nameelement: <HousingIssues />
  },
  {
    id: 'estate-lawyer',
    value: 'Дела по недвижимости',
    nameelement: <EstateLawyer />
  },
  {
    id: 'credit-affairs',
    value: 'Кредитные дела',
    nameelement: <CreditAffairs />
  },
  {
    id: 'disputes-in-arbitration',
    value: 'Споры в Арбитраже',
    nameelement: <DisputesInArbitration />
  },
  {
    id: 'protection-of-honor-and-dignity',
    value: 'Защита чести и достоинства',
    nameelement: <ProtectionOfHonorAndDignity />
  },
  {
    id: 'land-affairs',
    value: 'Земельные дела',
    nameelement: <LandAffairs />
  }
];