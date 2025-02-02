import { useLang } from '@/hooks/useLang';
import Link from 'next/link';

const BuyersListItems = () => {

    const { lang, translations } = useLang()

    return (
        <>
            <li className='nav-menu__accordion__item'>
                <Link
                    href='/about'
                    className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
                >
                    {translations[lang].main_menu.about}
                </Link>
            </li>
            <li className='nav-menu__accordion__item'>
                <Link
                    href='/about'
                    className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
                >
                    {translations[lang].main_menu.blog}
                </Link>
            </li>
            <li className='nav-menu__accordion__item'>
                <Link
                    href='/about'
                    className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
                >
                    {translations[lang].main_menu.shipping}
                </Link>
            </li>
        </>
    );
};

export default BuyersListItems;