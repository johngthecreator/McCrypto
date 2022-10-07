import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, IconButton } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

function Nav(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    let navigate = useNavigate();
    return (
        <nav className='sticky top-0'>
        <div className='flex w-full flex-row justify-between items-center bg-black p-5'>
            <a href="/" className="text-3xl font-extrabold text-white">McCrypto</a>
            <IconButton
            colorScheme="dark"
            className='border-solid border-[#ea00d9] border-2 text-3xl'
            aria-label='menu button'
            icon={<HamburgerIcon />}
            size="lg"
            ref={btnRef}
            onClick={onOpen}
            />
        </div>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent
        maxW="200px"
        backgroundColor="black"
        className='shadow-xl overflow-scroll'>
            <DrawerHeader className='pt-5 text-white text-center'>
                <h1 className='font-extrabold text-3xl'>Menu</h1>
            </DrawerHeader>
            <DrawerBody>
            <div className="grid grid-columns-1 w-full">
                <button className="text-center font-extrabold text-[#ea00d9] text-xl px-5 py-2" onClick={()=>{navigate("/")}} >Home</button>
                <button className="text-center font-extrabold text-[#ea00d9] text-xl px-5 py-2" onClick={()=>{navigate("/crypto")}} >Crypto</button>
            </div>
            </DrawerBody>
        </DrawerContent>
        </Drawer>
    </nav>
    );
}

export default Nav;