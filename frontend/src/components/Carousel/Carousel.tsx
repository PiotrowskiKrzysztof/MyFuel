import { Button } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

type Props = {
  images: string[];
  interval?: number;
};

const Carousel = ({ images, interval = 3000 }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideToNextImage = () => {
    setCurrentImageIndex(prev => {
      if (prev === images.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  useEffect(() => {
    const sliderTimer = setTimeout(slideToNextImage, interval);
    return () => clearTimeout(sliderTimer);
  });

  return (
    <View style={styles.carousel}>
      <Image
        style={styles.stretch}
        source={{
          uri: images[currentImageIndex],
        }}
      />
      <View style={styles.buttonGroup}>
        {images.map((image, index) => (
          <Button
            key={image}
            style={styles.dot}
            size="tiny"
            status={currentImageIndex === index ? 'primary' : 'basic'}
            onPress={() => setCurrentImageIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    display: 'flex',
    width: '100%',
    height: 150,
  },
  stretch: {
    borderRadius: 8,
    flex: 1,
    resizeMode: 'cover',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: Dimensions.get('window').width / 2 - 33 * 3,
  },
  dot: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    borderRadius: 99,
    borderColor: 'transparent',
  },
});

export default Carousel;
