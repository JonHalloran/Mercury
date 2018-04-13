json.runs ({})

json.runs do
  @runs.each do |run|
    json.set! run.id do
      json.partial! 'api/runs/run', run: run
    end
  end
end
