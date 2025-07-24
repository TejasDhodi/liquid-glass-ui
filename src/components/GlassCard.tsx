import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  blur?: string
  backgroundColor?: string
  borderRadius?: string
  boxShadow?: string
  padding?: string
  border?: string
  style?: React.CSSProperties
  className?: string  
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  blur = '10px',
  backgroundColor = 'rgba(255, 255, 255, 0.1)',
  borderRadius = '16px',
  boxShadow = '',
  padding = '20px',
  border = '',
  style = {},
  className = "tejas"  
}) => {
  const customStyles: React.CSSProperties = {
    backdropFilter: `blur(${blur})`,
    background: backgroundColor,
    borderRadius,
    boxShadow,
    padding,
    border,
    color: 'white',
    ...style
  }

  return <div className={`glass ${className}`} style={customStyles}>{children}</div>
}

export default GlassCard
