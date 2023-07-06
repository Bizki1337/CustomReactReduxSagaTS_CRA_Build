import {Navigate, Route, Routes} from 'react-router-dom'

import HomeContainer from 'pages/Home'

const CoreRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<HomeContainer />} />
                <Route path='*' element={<Navigate replace to='/home' />} />
            </Routes>
        </>
    )
}

export default CoreRoutes