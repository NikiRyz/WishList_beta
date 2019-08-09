import * as React from 'react';
import Masonry from 'react-masonry-component';
import LoadingMyGiftList from "../../../MyWishList/LoadingWishList/LoadingWishList";
import Wishlistitem from "../MyGiftListitem";
import cls from './PendingMyGiftList.module.scss'


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

    },
];

class PendingMyGiftList extends React.Component {

    handlerDelItem = (id) => {
        let wishItems = this.state.wishItems.slice();
        wishItems.splice(id, 1);
        this.setState({wishItems});
    };

    state = {
        isLoading: false
    };

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1000)
    }

    render() {
        const {isLoading} = this.state;
        let wishlist;

        if (isLoading) {
            wishlist = <div className={cls.load}><LoadingMyGiftList/></div>
        } else {
            wishlist = items.map(item => {
                return < Wishlistitem key={item.id} name={item.name} price={item.price} description={item.description} img={item.img}
                                      fio={item.fio} onClick={this.handlerDelItem}/>
            })
        }
        return (
            <Masonry className={cls.container}>

                {wishlist}

            </Masonry>
        );
    }
}

export default PendingMyGiftList