interface IProduct {
  id: string;
  label: string;
  icon: string;
  description?: string;
  actionLabel: string;
  productCode: string | null;
}

interface ISubSection {
  id: string;
  label: string;
  icon: string;
  products: IProduct[];
}

interface ISubMenu {
  id: string;
  name: string;
  image: string;
  hover_image: string;
  isHover: boolean;
  isActive: boolean;
  subSection: ISubSection[];
}

interface ISubSectionMenu {
  id: string;
  name: string;
  image: string;
  hover_image: string;
  isHover: boolean;
  isActive: boolean;
}

export interface IData {
  name: string; 
  isActive: boolean;
  subSectionMenu: ISubSectionMenu[];
  subMenu: ISubMenu[];
}

export interface IConfigType {
  componentType: string;
  validateSection: boolean;
  mandatory: boolean;
  className: string;
  sectionContent: { isShow: boolean; titleData: string };
}

export interface INavigationItem {
  name: string;
  label: string;
  url: string;
  isActive: boolean;
  id: string;
  productUrl: boolean;
  isShow?: boolean;
}

export interface ITabsData {
  displayType: string;
  name: string;
  label: string;
  displayData?: any[];
}
