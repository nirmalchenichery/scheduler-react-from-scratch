import { Link, Head } from '@inertiajs/react';
import Calender from '@/Components/schedule/Calender';
// import CalenderModal from '@/Components/CalenderModal';

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <Calender />
        </>
    );
}
