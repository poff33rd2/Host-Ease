import { Card } from '@/app/dashboard/cards';
import RevenueChart from '@/app/dashboard/revenue-chart';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { inter } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../lib/data';

export default async function Dashboard() { //use async  to ensure fetching is down all at once on their own time to not crash code when fetch fails.
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

    return (
        <main>
            <h1 className={`${inter.className} mb-4 text-xl md:text-2x1 font-bold`}>Dashboard</h1>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" 
                value={numberOfCustomers} 
                type="customers" />
            </div>
            <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
                <RevenueChart revenue={revenue}  />
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    )
}
