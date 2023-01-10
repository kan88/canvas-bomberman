import { useEffect, useState, useRef } from 'react'

import { Overlay } from '../overlay/overlay'
import { GameStart } from '../game-start/game-start'

import styles from './game-display.module.css'

const GameDisplay = () => {
  const [isStart, setIsStart] = useState(true)
  const gameRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas) return

    canvas.style.backgroundColor = 'gray'

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = 'yellow'
    ctx.fillRect(20, 20, 60, 60)
  }, [])

  return (
    <div className={styles.gameDisplay}>
      <canvas ref={gameRef} width={1280} height={720} />
      {isStart && (
        <Overlay>
          <GameStart onButtonClick={() => setIsStart(false)} />
        </Overlay>
      )}
    </div>
  )
}

export { GameDisplay }
