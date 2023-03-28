import { Link, Head } from '@inertiajs/react';
import Calender from '@/Components/Calender';
import ContextWrapper from './context/ContextWrapper';

export default function Welcome(props) {
    return (
        <>
          <ContextWrapper>
            <Head title="Welcome" />
            <Calender />
          </ContextWrapper>
        </>
    );
}
