import React from 'react'
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import Banner from '../components/Banner';
import Quote from '../components/Quote';
import Description from '../components/Description';
import WorkingHours from '../components/WorkingHours';








export default function HomePage() {
  return (
    <div>
        <AppNavbar />

        <Banner />
        <Quote />
        <Description />
        <WorkingHours />

        <AppFooter />

    </div>
  )
}
