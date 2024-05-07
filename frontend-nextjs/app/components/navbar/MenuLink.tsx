import React from 'react'

interface Props {
    label: string;
    onClick: () => void;
}

export function MenuLink({label, onClick}: Props) {
  return (
    <li className="hover:bg-gray-100 transition cursor-pointer" onClick={onClick}>{label}</li>
  )
}
