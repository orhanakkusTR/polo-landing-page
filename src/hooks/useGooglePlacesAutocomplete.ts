import { useEffect, useRef, useState } from 'react';

interface PlaceDetails {
  fullAddress: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export function useGooglePlacesAutocomplete(inputRef: React.RefObject<HTMLInputElement>) {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!inputRef.current || typeof google === 'undefined') return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['address_components', 'formatted_address']
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.address_components) return;

      let streetNumber = '';
      let route = '';
      let city = '';
      let state = '';
      let zipCode = '';

      place.address_components.forEach(component => {
        const types = component.types;

        if (types.includes('street_number')) {
          streetNumber = component.long_name;
        }
        if (types.includes('route')) {
          route = component.long_name;
        }
        if (types.includes('locality')) {
          city = component.long_name;
        }
        if (types.includes('administrative_area_level_1')) {
          state = component.short_name;
        }
        if (types.includes('postal_code')) {
          zipCode = component.long_name;
        }
      });

      const streetAddress = `${streetNumber} ${route}`.trim();
      const fullAddress = place.formatted_address || '';

      setPlaceDetails({
        fullAddress,
        streetAddress,
        city,
        state,
        zipCode
      });
    });

    autocompleteRef.current = autocomplete;

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [inputRef]);

  return placeDetails;
}
