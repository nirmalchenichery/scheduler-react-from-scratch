import { Link, Head } from '@inertiajs/react';
import Calender from '@/Components/Calender';
import ContextWrapper from './context/ContextWrapper';

export default function Welcome(props) {

    // dayts -- holiday array
    return (
        <>
          <ContextWrapper>
            <Head title="Welcome" />
            <Calender />
          </ContextWrapper>
        </>
    );
}
