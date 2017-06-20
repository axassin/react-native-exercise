import React from 'react'
import {Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {

	const { 
		thumbnail_image,
		artist,
		title,
		image,
		url } = album
	const { 
		headerContentStyle, 
		thumbnailStyle, 
		thumbnailContentStyle,
		headerTextStyle,
		imageStyle } = styles

	return(
		<Card>
			<CardSection>
				<View style={ thumbnailContentStyle }>
					<Image 
						style={ thumbnailStyle }
						source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={ headerContentStyle }>
					<Text style={ headerTextStyle }>{ title }</Text>
					<Text>{ artist }</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image
					style={imageStyle}
					source={{uri: image}}
				/>
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>Buy</Button>
			</CardSection>
		</Card>
	)
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		width:50 ,
		height:50
	},
	thumbnailContentStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		marginLeft: 5
	},
	headerTextStyle: {
		fontSize: 18
	},
	imageStyle: {
		height: 300,
		width: 500
	}
}
export default AlbumDetail