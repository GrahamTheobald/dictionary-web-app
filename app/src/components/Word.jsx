import React, { useState, useRef, useEffect } from 'react'
import Definition from './Definition'
import play from '../assets/images/icon-play.svg'
import newWindow from '../assets/images/icon-new-window.svg'
import './Word.css'

export default function Word({ data, handleWord }) {
	const { word, phonetics, meanings, sourceUrls } = data
	const [phoneticss, setPhoneticss] = useState(phonetics)
	const [audio, setAudio] = useState(phonetics?.[0]?.audio)
	const audioRef = useRef(null)

	useEffect(() => {
		setPhoneticss(phonetics)
		setAudio(phonetics[0]?.audio)
	}, [phonetics])

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
									<li
										onClick={() => {
											if (!phoneticss[i].audio) return
											setAudio(phoneticss[i].audio)
										}}
										key={i}
										className='header__phonetic'
									>
										{p.text}
									</li>
								)
							})}
					</ul>
				</div>
				<img
					onClick={() => {
						if (audio) {
							audioRef.current.play()
						}
					}}
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
											<p
												onClick={() => handleWord(syn)}
												className='nym__nym'
												key={i}
											>
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
				<a className='source__url' href={sourceUrls[0]} target='_blank'>
					<p>{sourceUrls[0]}</p>
					<img src={newWindow} alt='new window' />
				</a>
			</div>
		</div>
	)
}
