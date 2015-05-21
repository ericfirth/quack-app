class Api::StaticPagesController < Api::ApiController

  def search
    @search_results = PgSearch
      .multisearch(params[:query])
      .page(params[:page])
      .includes(searchable: :sender)
    # render json: @search_results
  end
end
