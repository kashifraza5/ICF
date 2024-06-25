import React from 'react'
import ICF from '../../assets/Logos/ICF.png'
import Dashboardlogon from '../../assets/Logos/Dashboard.png'
import leadslogo from '../../assets/Logos/leadslogo.png'
import email from '../../assets/Logos/mail.png'
import phone from '../../assets/Logos/phone.png'
import leadsource from '../../assets/Logos/cloud-01.png'
import billing from '../../assets/Logos/receipt.png'
import setting from '../../assets/Logos/settings-02.png'
const Snavbar = () => {
  // const Menus = ["Company","Company Info","Employees","Phone Numbers","CRM","Time","Tags"]
  return (
  <>
 
    <div className ='sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] h-[1080px] overflow-y-auto text-center bg-nav'>
     <img className='w-[77px] h-[77px] top-[28px] left-[86px] gap-0 ml-14 mt-5 ' src={ICF} alt="xyz"  /> 
     <h5 className='font-bold text-base text-whit '>PURITY UI DASHBOARD</h5>
<div className='mb-2 border-b-4 border-whit mt-10'></div>

     <div className='flex flex-col mt-9'> 
     <div className='flex space-x-2 ml-3'>
      <img src={Dashboardlogon}alt="" />
      <h6 className='font-bold text-base text-whit m-1'>Dashboard</h6>
     </div>
     <div className='flex space-x-6 ml-5 mt-5'>
      <img src={leadslogo}alt="" className='w-[20px] h-[20px]'/>
      <p className='font-bold text-base text-colo '>Leads</p>
     </div>
     <div className='flex space-x-6 ml-5 mt-5'>
      <img src={email}alt="" className='w-[20px] h-[20px]'/>
      <h6 className='font-bold text-base text-colo '>Campaigns</h6>
     </div>
     <div className='flex space-x-6 ml-5 mt-5'>
      <img src={phone}alt="" className='w-[20px] h-[20px]'/>
      <h6 className='font-bold text-base text-colo'>Next Call</h6>
     </div>
     <div className='flex space-x-6 ml-5 mt-5'>
      <img src={leadsource}alt="" className='w-[20px] h-[20px]'/>
      <h6 className='font-bold text-base text-colo'>Lead Sources</h6>
     </div>
     <div className='flex space-x-6 ml-5 mt-5'>
      <img src={billing}alt="" className='w-[20px] h-[20px]'/>
      <h6 className='font-bold text-base text-colo'>Billing</h6>
     </div>
     <div className='flex space-x-6 ml-5 mt-5'>
      <img src={setting}alt="" className='w-[20px] h-[20px]'/>
      <h6 className='font-bold text-base text-colo'>Setting</h6>
     </div>


    </div>
    </div>
   
    </>
  )
}
export default Snavbar


