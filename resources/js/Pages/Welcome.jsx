import { Link, Head } from '@inertiajs/react';
import Calender from '@/Components/Calender';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Calender />
        </>
    );
}
