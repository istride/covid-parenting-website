import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlMatcher } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ImpactComponent } from './impact/impact.component';
import { ImpactStoriesComponent } from './impact-stories/impact-stories.component';
import { ImpactChampionsComponent } from './impact-champions/impact-champions.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { TipsComponent } from './tips/tips.component';
import { PsaComponent } from './psa/psa.component';
import { DigitalparentingComponent } from './digitalparenting/digitalparenting.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { AudiovisualsComponent } from './audiovisuals/audiovisuals.component';
import { CaseworkersComponent } from './caseworkers/caseworkers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { FaithleadersComponent } from './faithleaders/faithleaders.component';
import { NewsMainComponent } from './news-main/news-main.component';
import { MapComponent } from './map/map.component';
import { ImpactbriefsComponent } from './impactbriefs/impactbriefs.component';
import { PressComponent } from './press/press.component';
import { PublicationsComponent } from './publications/publications.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { SearchComponent } from './search/search.component'
import { BrandingComponent } from './branding/branding.component';
import { WhocampaignComponent } from './whocampaign/whocampaign.component';
import { Socialmedia2Component } from './socialmedia2/socialmedia2.component';
import { GpicampaignComponent } from './gpicampaign/gpicampaign.component';
import { FaqComponent } from './faq/faq.component';
import { FavtipsComponent } from './favtips/favtips.component';
import { GlobalInitiativeSupportParentsComponent } from './global-initiative-support-parents/global-initiative-support-parents.component';
import { NewWebnarInnovateComponent } from './new-webnar-innovate/new-webnar-innovate.component';
import { SaveDatesJulyComponent } from './save-dates-july/save-dates-july.component';
import { PlayfulParentingMonthComponent } from './playful-parenting-month/playful-parenting-month.component';
import { NewWebinarInnovateComponent } from './new-webinar-innovate/new-webinar-innovate.component';
import { ParentChatHelpingMilosComponent } from './parent-chat-helping-milos/parent-chat-helping-milos.component';
import { ProfessorCathyWardsAlanPiferAwardComponent } from './professor-cathy-wards-alan-pifer-award/professor-cathy-wards-alan-pifer-award.component';
import { GlobalStudyByCDCAndUniversityOfOxfordComponent } from './global-study-by-cdc-and-university-of-oxford/global-study-by-cdc-and-university-of-oxford.component';
import { ConsentsComponent } from './consents/consents.component';
import { ArticlesComponent } from './articles/articles.component';



const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "news", component: NewsComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "impact", component: ImpactComponent },
  { path: "contactus", component: ContactusComponent  },
  { path: "tips", component: TipsComponent },
  { path: "tips/:langCode", component: TipsComponent },
  { path: "tips/:langCode/index.html", component: TipsComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "articles/:articleTitle", component: ArticlesComponent },

  { path: "caseworkers", component: CaseworkersComponent },
  { path: "psa", component: PsaComponent },
  { path: "digitalparenting", component: DigitalparentingComponent },
  { path: "socialmedia", component: SocialmediaComponent },
  { path: "newsletters", component: NewslettersComponent },
  { path: "webinars", component: WebinarsComponent },
  { path: "audiovisuals", component: AudiovisualsComponent },
  { path: "contributors", component: ContributorsComponent },
  { path: "faithleaders", component: FaithleadersComponent },
  { path: "news-main", component: NewsMainComponent },
  { path: "impactstories", component: ImpactStoriesComponent },
  { path: "impactchampions", component: ImpactChampionsComponent },
  { path: "impactmap", component: MapComponent },
  { path: "impactbriefs", component: ImpactbriefsComponent },
  { path: "press", component: PressComponent },
  { path: "publications", component: PublicationsComponent },
  { path: "podcasts", component: PodcastsComponent },
  { path: "search", component: SearchComponent },
  { path: "branding", component:BrandingComponent },
  { path: "whocampaign", component: WhocampaignComponent },
  { path: "socialmedia2", component: Socialmedia2Component },
  { path: "gpicampaign", component: GpicampaignComponent },
  { path: "faq", component: FaqComponent },
  { path: "favtips", component: FavtipsComponent },
  { path: "global-initiative-support-parents", component: GlobalInitiativeSupportParentsComponent },
  { path: "new-webnar-innovate", component: NewWebnarInnovateComponent },
  { path: "save-dates-july", component: SaveDatesJulyComponent },
  { path: "playful-parenting-month", component: PlayfulParentingMonthComponent },
  { path: "new-webinar-innovate", component: NewWebinarInnovateComponent},
  { path: "parent-chat-helping-milos", component: ParentChatHelpingMilosComponent},
  { path: "professor-cathy-wards-alan-pifer-award", component: ProfessorCathyWardsAlanPiferAwardComponent},
  { path: "global-study-by-CDC-and-University-of-Oxford", component: GlobalStudyByCDCAndUniversityOfOxfordComponent},
  { path: "consents", component: ConsentsComponent },

      {
    path: "blog",
    component: BlogComponent,
    pathMatch: "full"
  },
  {
    path: "blog/:slug",
    component: BlogPostComponent,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: "disabled", relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
