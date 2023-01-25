import React, { useState, useRef } from 'react'
import Definition from './Definition'
import play from '../assets/images/icon-play.svg'
import newWindow from '../assets/images/icon-new-window.svg'
import './Word.css'

export default function Word({ data }) {
	const { word, phonetics, meanings, sourceUrls } = data
	const [audio, setAudio] = useState(phonetics[0].audio)
	const audioRef = useRef(null)
	return (
		<div className='info'>
			<div className='info__header'>
				<div className='header__left'>
					<h1 className='header__word'>{word}</h1>
					<ul className='header__phonetics'>
						{phonetics
							.filter((p) => p.text)
							.map((p, i) => {
								return (
									<li key={i} className='header__phonetic'>
										{p.text}
									</li>
								)
							})}
					</ul>
				</div>
				<img
					onClick={() => audioRef.current.play()}
					className='header__audio'
					src={play}
					alt='play arrow'
				/>
				<audio ref={audioRef} src={audio} />
			</div>
			{meanings.map((meaning, i) => {
				return (
					<div className='info__meaning' key={i}>
						<div className='meaning__header'>
							<p className='meaning__title'>{meaning.partOfSpeech}</p>
							<div className='meaning__line' />
						</div>
						<p className='meaning__meaning'>Meaning</p>
						<ul className='definition__list'>
							{meaning.definitions.map((definition, i) => {
								return <Definition key={i} Definition={definition} />
							})}
						</ul>
						{meaning.synonyms.length > 0 && (
							<div className='definition__nym'>
								<p className='nym__title'>Synonyms</p>
								<div className='nym__list'>
									{meaning.synonyms.map((syn, i) => {
										return (
											<p className='nym__nym' key={i}>
												{syn}
											</p>
										)
									})}
								</div>
							</div>
						)}
					</div>
				)
			})}
			<div className='meaning__source'>
				<p className='source__title'>Source</p>
				<a className='source__url' src={sourceUrls[0]}>
					<p>{sourceUrls[0]}</p>
					<img src={newWindow} alt='new window' />
				</a>
			</div>
		</div>
	)
}
