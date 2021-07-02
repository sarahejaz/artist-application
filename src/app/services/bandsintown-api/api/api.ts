export * from './artistEvents.service';
import { ArtistEventsService } from './artistEvents.service';
export * from './artistInformation.service';
import { ArtistInformationService } from './artistInformation.service';
export const APIS = [ArtistEventsService, ArtistInformationService];
