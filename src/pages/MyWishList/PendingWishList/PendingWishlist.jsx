import * as React from 'react';
import Masonry from 'react-masonry-component';
import LoadingWishList from "../LoadingWishList/LoadingWishList";
import Item from "../Wishlistitem/Wishlistitem";
import cls from './PendingWishList.module.scss'




const items = [
    {
        id: 1,
        name: '«Приток адреналина»',
        price: '1190 ₽',
        description: 'Обладатели стальных нервов и железной воли к главному мужскому празднику из года в год мечтают получить оригинальный подарок.  Если вы хотите порадовать Вашего мужчину, преподнести незабываемый подарок, сделать сюрприз, достойный настоящего джентльмена, выбирайте подарок-впечатление «Приток адреналина».  В этом подарке для настоящих мужчин, собраны впечатления, способные пощекотать нервы и зарядить позитивом для новых достижений.',
        img: 'https://empranacdn.ru/images/gifts/big/pritok-adrenalina-big.jpg',

    },
    {
        id: 2,
        name: '«Сны Джульетты»',
        price: '890 ₽',
        description: '«Сны Джульетты» — настоящее путешествие в волшебный мир женских фантазий, настолько чувственный, что его легко можно спутать с ожившими мечтами. Бесконечный танец души, исходящий от самого сердца, настолько страстный, что может окутать своим все сжигающим пламенем страсти весь мир вокруг. Нужно ущипнуть себя посильнее, чтобы поверить в реальность такого сновидения, ведь подобные переживания так редко бывают реальными! Однажды оказавшись героиней такого сна, просыпаться уже не захочется, останется только наслаждаться и продолжать сказочные приключения!' ,
        img: 'https://empranacdn.ru/images/gifts/big/juliet-big.jpg',

    }, {
        id: 3,
        name: '«Музыка сердец»',
        price: '3990 ₽',
        description: '«Музыка сердец» – такой подарочный сертификат для двоих сможет стать самым незабываемым моментом в любых сердечных отношениях. Вы сможете не только сами наслаждаться каждой минутой рядом с любимым человеком, но и видеть его счастливым, зная, что он счастлив рядом с вами, а вы рядом с ним. Минуты единения ваших чувств запомнятся вам с таким подарочным сертификатом для двоих, как необычная, наполненная романтикой прогулка или же, как проведенное свидание в волнующей и идеально подобранной обстановке.',
        img:'https://empranacdn.ru/images/gifts/big/music-big.jpg'

    }, {
        id: 4,
        name: ' «Пламя жизни»',
        price: '5990 ₽',
        description: '«Пламя жизни» – незаменимая вещь для отдыха людей, ценящих барабанную дробь своего сердца больше уютного тепла гостиной. Бешеные скорости, опаснейшие виражи и преодоление препятствий – по-другому проводить свободное время просто нет смысла. Побороть себя и природу, надеть на себя корону повелителя стихий – настоящий способ доказать, что ты жив!',
        img: 'https://empranacdn.ru/images/gifts/big/plamja-big.jpg',

    }, {
        id: 5,
        name: '«Точка кипения»',
        price: '8990 ₽',
        description: '«Точка кипения» – приключения сравнимые лишь с прямой инъекцией адреналина, наполняющей огнем каждую вену. Бешеный и неудержимый, подарок, эмоции которого не смогут сдержать даже стальные цепи. «Точка кипения» впитал в себя самые хищные развлечения, от которых у многих могут просто сдать нервы. Безумства и борьба с самим собой на воде, в воздухе и даже на поле боя – испытание или самопроверка?! – не просто, непростой подарок!',
        img: 'https://empranacdn.ru/images/gifts/big/tochka-big.jpg',

    },
    {
        id: 6,
        name: '«Квест»',
        price: '2690 ₽',
        description: ' Все обожают яркие и незабываемые приключения! Стань героем своего любимого фильма, компьютерной игры или эпохи. Уникальный подбор развлечений для всех. Адреналин? Да! Головоломки? Да! Близкие люди и бесконечные беседы? Да, да, да! Самые популярные впечатления в одном подарке. Собирайте самую отвязную компанию и приготовьтесь провести незабываемый вечер в атмосфере азарта! "Квест" - это отличный способ разгрузить свой разум от повседневных забот и окунуться в мир приключений, где Вы самый главный Герой. Момент настал, воплотите желание стать супердетективом в реальность! ',
        img: 'https://empranacdn.ru/images/gifts/big/kvest-big.jpg',

    },
    {
        id: 7,
        name: '«Нежная встреча»',
        price: '2990 ₽',
        description: ' Вас волнует блеск любимых глаз.  В предвкушении встречи ритм Вашего сердца учащается. Всю нежность и ласку Вы делите на двоих. Вы влюблены!..  Какой подарок можно подарить обладателю Вашего сердца? Так сложно подобрать презент, когда хочется подарить небо и землю.  Отличным решением будет подарок-впечатление «Нежная встреча», в который мы включили самые яркие эмоции для Ваших любимых.   ',
        img: 'https://empranacdn.ru/images/gifts/big/nejnaya_vstrecha-big.jpg',

    },
    {
        id: 8,
        name: '«Девять жизней»',
        price: ' 29 000₽',
        description: 'Иногда найти что-то особенное, чтобы впитать свежих эмоций – довольно сложно, и начинает казаться, что на поиск может уйти целая жизнь. Подарить новые ощущения, которые хотелось бы пронести даже больше, чем через одну жизнь, сравнить которые можно лишь со словом «счастье». Собрав в себе впечатления и переживания самых ярких многогранных развлечений, “9 жизней” стал самым невероятным открытием в мире людей, с тех пор, как человек придумал сами подарки.  ',
        img: 'https://empranacdn.ru/images/gifts/big/nine-big.jpg',

    },
    {
        id: 9 ,
        name: '«Любимое солнышко»',
        price: '1990 ₽',
        description: '«Любимое солнышко» – набор ярких эмоций, облаченный в теплую, заботливую оболочку родительской заботы и нежности. Модные, сочные и такие искренние – развлечения «Любимое солнышко» подобраны таким образом, чтобы мог быть воплощен в жизнь любой детский каприз. Невероятно подходящий подарок ребенку сможет стать прекрасным памятным впечатлением, впечатлением большим, чем одноразовая игрушка или теплый свитер. Самое главное, что сам подарок, фактически, универсален, ведь в нем есть и развлечения, и развивающие занятия. Ребенок будет не только доволен, но и не забудет похвастаться своим друзьям!  ',
        img: 'https://empranacdn.ru/images/gifts/big/lovesun-big.jpg',

    },
];

class PendingWishlist extends React.Component {

    handlerDelItem = (id) => {
        let  wishItems2;
        let wishItems = this.state.wishItems2;
        this.setState({wishItems});
    };

    state = {
        isLoading: false
    };

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 2000)
    }

    render() {
        const {isLoading} = this.state;
        let wishlist;

        if (isLoading) {
            wishlist = <div className={cls.load}><LoadingWishList/></div>
        } else {
            wishlist = items.map(item => {
                return  < Item key={item.id} name={item.name} price={item.price} description={item.description} img={item.img}
                                        onClick={this.handlerDelItem}/>
            })
        }
        return (
            <Masonry className={cls.container}>

                {wishlist}

            </Masonry>

        );
    }
}

export default PendingWishlist