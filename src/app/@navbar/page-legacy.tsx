// 'use client';

// import cs from './navbar.module.scss';
// import * as Fa6 from 'react-icons/fa6';
// import * as Fa from 'react-icons/fa';
// import * as Ri from 'react-icons/ri';
// import Image from 'next/image';
// import Link from 'next/link';
// import Button from '@/shadcn/button';
// import Nav from '@/shadcn/navigation-menu';
// import Popover from '@/shadcn/popover';
// import Dialog from '@/shadcn/dialog';
// import SheetRoot from '@/shadcn/sheet';
// import Input from '@/shadcn/input';

// export default function Navbar() {
//   return (
//     <header className={cs.navbar}>
//       <SheetRoot>
//         <SheetRoot.Trigger asChild>
//           <Button className={cs['nav-menu-mobile-btn']} size='icon'>
//             <Ri.RiMenu2Fill />
//           </Button>
//         </SheetRoot.Trigger>
//         <SheetRoot.Content side='left'>
//           <NavMenu />
//         </SheetRoot.Content>
//       </SheetRoot>

//       <Brand />
//       <NavMenu />

//       <div className={cs['nav-buttons']}>
//         <Dialog>
//           <Dialog.Trigger>
//             <Button size='icon'>
//               <Fa.FaSearch />
//             </Button>
//           </Dialog.Trigger>

//           <Dialog.Content className={cs['search-dialog']}>
//             <Input placeholder='Search' />
//           </Dialog.Content>
//           <Dialog.Close className={cs['search-dialog-close-btn']} />
//         </Dialog>

//         <Dialog>
//           <Dialog.Trigger>
//             <Button size='icon'>
//               <Fa6.FaUser />
//             </Button>
//           </Dialog.Trigger>

//           <Dialog.Content>
//             <Dialog.Header>
//               <Dialog.Title>Login</Dialog.Title>
//               <Dialog.Description></Dialog.Description>
//             </Dialog.Header>
//           </Dialog.Content>
//         </Dialog>

//         <Popover>
//           <Popover.Trigger>
//             <Button size='icon' variant='default'>
//               <Fa6.FaCartShopping />
//             </Button>
//           </Popover.Trigger>
//           <Popover.Content>Cart</Popover.Content>
//         </Popover>
//       </div>
//     </header>
//   );
// }

// function Brand() {
//   return (
//     <Link href='/'>
//       <div className={cs['brand']}>
//         <div className={cs['brand-logo-container']}>
//           <Image src='/logo/sgkopi-logo.svg' alt='SG Kopi logo' fill />
//         </div>
//         <h2 className={cs['brand-name']}>SG KOPI</h2>
//       </div>
//     </Link>
//   );
// }

// function NavMenu() {
//   return (
//     <Nav className={cs['nav-menu']}>
//       <Nav.List className={cs['nav-list']}>
//         <Nav.Item>
//           <Nav.Link className={cs['nav-item']}>Home</Nav.Link>
//         </Nav.Item>

//         <Nav.Item>
//           <Nav.Link className={cs['nav-item']}>Promos</Nav.Link>
//         </Nav.Item>

//         <Nav.Item>
//           <Nav.Link className={cs['nav-item']}>Menu</Nav.Link>
//         </Nav.Item>

//         <Nav.Item>
//           <Nav.Link className={cs['nav-item']}>About</Nav.Link>
//         </Nav.Item>

//         <Nav.Item>
//           <Nav.Link className={cs['nav-item']}>Contact</Nav.Link>
//         </Nav.Item>
//       </Nav.List>
//     </Nav>
//   );
// }

// const contactData = [
//   {
//     icon: <Fa6.FaPhoneFlip />,
//     title: '(077) 722-0372',
//     body: 'info@sg-kopi.com',
//   },
//   {
//     icon: <Fa6.FaMapLocationDot />,
//     body: '314 Bike Store Crisostomo Street Poblacion Uno, Pagsanjan, Philippines, 4008',
//   },
// ];

// function Contact(props: {
//   icon: React.ReactNode;
//   title: string;
//   body: string;
// }) {
//   return (
//     <div>
//       {props.icon}
//       <p>{props.title}</p>
//       <p>{props.body}</p>
//     </div>
//   );
// }
